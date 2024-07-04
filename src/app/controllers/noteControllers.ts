import handler from '@/app/database/database'

export const Get = async () => {
    try {
        // return await get()
    } catch (error) {
        console.error("Erro ao processar informações", error)
        return error;
    }
}

// export const Post = (data: any) => {
//     try {
//         if (data.title === "") return { Error: "Preencha o título" }
//         if (data.content === "") return { Error: "Preencha o conteúdo" }
//         return data;
//     } catch (error) {
//         console.error("Erro ao salvar dados", error)
//         return error;
//     }
// }