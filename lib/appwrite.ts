
import { CreateUserParams } from "@/type"
import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite"

export const appwriteConfig = {
    endpoint : process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!,
    projectId : process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!,
    platform:"com.rao.foodordring",
    databaseId : '68e2234600261cabb111',
    userCollectionId :"user"
}

export const client =  new Client()

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform)



export const account = new Account(client)
export const databases = new Databases(client)
export const avatars = new Avatars(client)


export const createUser = async ({email , password , name}: CreateUserParams )=>{
    try {
        const newAccount = await account.create(ID.unique() ,email , password, name)
        if(!newAccount)throw Error;

        await signIn({email , password})
        
        const avtarUrl = avatars.getInitialsURL(name)
        return await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {accountId  : newAccount.$id,name , email , avatar:avtarUrl}
        )


    } catch (error) {
        throw new Error(error as string)
    }
}

export const signIn = async ({email,password}: SignInParams) => {
    try {
        const session = await account.createEmailPasswordSession(email,password)
        
    } catch (error) {
        throw new Error(error as string);
    }
}