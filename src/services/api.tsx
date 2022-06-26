import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICardModel } from "../Models/CardsModel";

export const usersApi = createApi({
    baseQuery:fetchBaseQuery({baseUrl:"https://jsonplaceholder.typicode.com"}),
    endpoints:(builder)=>({
        users:builder.query<ICardModel[],void>({
            query:()=>'/users'
        })
    })

})
export const {useUsersQuery} = usersApi;