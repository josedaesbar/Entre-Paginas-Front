import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

const CategorieName = () => {
  const router = useRouter();
  const [bookName, setBookName] = useState<string | string[] | undefined>(
    router.query.name
  );

  return (
    <div>
      <div>CATEGORIA - {bookName}</div>
    </div>
  );
};

export default CategorieName;
