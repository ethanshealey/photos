export interface ApiPageProps {
    params: { id: string } // <- the same "slug" and any other segments
    searchParams: { [key: string]: string | string[] | undefined }
}