"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const goPage = (e: any) => {
    router.push(`/${e.target.value}`);
  };
  const router = useRouter();
  /*  useEffect(() => {
    router.push("/ventas");
  }, []); */

  return (
    <>
      <div>
        <button onClick={goPage} value={"ventas"}>
          ventas
        </button>
        <button onClick={goPage} value={"clientes"}>
          clientes
        </button>
      </div>
    </>
  );
}
