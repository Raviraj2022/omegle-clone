import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function Room() {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");

  useEffect(() => {
    //Logic
  }, [name]);
  return (
    <div>
      <div>Hi {name}</div>
    </div>
  );
}
