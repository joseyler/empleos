"use client";

export default function ClientesTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <div> Este es el template de fidelizados, a continuacion se
          dibuja el page.tsx correspondiente al path.
        </div>
        {children}
        <div>Template abajo de page.tsx</div>
    </>
  );
}
