export interface Contato {
    id?: number
    nome: string
    avatar: string | ArrayBuffer //ArrayBuffer consegue lidar com dados binarios
    telefone: string
    email: string
    aniversario?: string
    redes?: string
    observacoes?: string
}
