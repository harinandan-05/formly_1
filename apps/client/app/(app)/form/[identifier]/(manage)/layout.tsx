import Topnav from "@/components/Forms/topbar"

export default function FormNavLayout({children}:{children:React.ReactNode}){

    return (
        <div>
            <Topnav />
            <main>
                {children}
            </main>
        </div>
    )
}