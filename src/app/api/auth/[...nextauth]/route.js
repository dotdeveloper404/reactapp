import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";


// const GOOGLE_CLIENT_ID = "981393572023-65b99s8in75hs6pfkuqnu6md2s78psie.apps.googleusercontent.com"
// const GOOGLE_CLIENT_SECRET = "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"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    //login user with email andd pasword
    CredentialsProvider({
        id : "credentials",
        name : "Credentials",
        async authorize(credentials){
        
          await connect();


          try{


              const user = await User.findOne({email : credentials.email});

              if(user){
                //check password
                const isPasswordCorrect = await bcrypt.compare(credentials.password,user.password);
                
                if(isPasswordCorrect){
                  return user;
                }else{
                  throw new Error("wrong credentials");
                }   

              }else{
                throw new Error("user not found");
              }

          }catch(err)
          {
            throw new Error(err);

          }
        }
    })

  ],
  pages:{
    error:'/dashboard/login',
  }
});

export {handler as GET , handler as POST};
