import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LoginButton } from "@/components/auth/login-button"
import { RegisterButton } from "@/components/auth/register-button"

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
})

export default function Home() {
  return (
    <>
      <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-sky-400 to-indigo-600">
        <div className="space-y-6 text-center">
          <h1 className={cn("text-6xl font-semibold text-white drop-shadow-mdshadow-md", font.className)}>
            Auth
          </h1>
          <p className="text-white text-lg">
            Serviço de autenticação, utilizando 2F authentication, verificação de email e redefinição de senha!
          </p>
          <div className="space-x-4">
            <LoginButton mode="modal" asChild>
              <Button size="lg">Entrar</Button>
            </LoginButton>
            <RegisterButton mode="modal" asChild>
              <Button size="lg">Cadastrar</Button>
            </RegisterButton>
          </div>
        </div>
      </main>
    </>
  )
}
