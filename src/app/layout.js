import "./globals.css";
import ContextProvaider from "@/contexto/contextProvaider";




export default function RootLayout({ children }) {
  return (

    <ContextProvaider>

      <html lang="pt-br">
        <body>
          {children}
        </body>
      </html>

    </ContextProvaider>

  );
}
