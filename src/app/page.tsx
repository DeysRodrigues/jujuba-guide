import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";


export default function Home() {
  return (
    <section>
      <main className="m-4 flex flex-col gap-3 justify-center items-center">
        <ModeToggle></ModeToggle>
        <h1 className="text-2xl">
          Jujuba Guide
        </h1>
        <p>Um guia para iniciantes de Toram!</p>
    
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            <Button>Classes
            </Button>
            <Button>
              <Link href='/skills'>
                Skills
              </Link>

            </Button>
          </div>
          <div className="flex flex-col gap-3">
            <Button>Guias
            </Button>
            <Button>
              Ferramentas
            </Button>
          </div>
          <div className="flex flex-col gap-3">
            <Button>Irmandade
            </Button>
            <Button>
              Gallery
            </Button>
          </div>
        </div>

      </main>

      <footer className="text-center">
        <p>criado por Venushim com ❤️</p>
      </footer>
    </section>

  );
}
