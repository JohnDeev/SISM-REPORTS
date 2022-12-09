import { STable, STBody, STBodyTR, STD, STH, STHead, STHeadTR } from "./style"

const Table = ({ data }) => {
  if (data[0] != null) {
    console.log(data[0])
    const keys = Object.keys(data[0]);
    keys.shift();
    return (
      <STable>
        <STHead>
          <STHeadTR>
            {["#", ...keys, "OPCIONES"].map((item, index) => (
              <STH key={index}>{item}</STH>
            ))}
          </STHeadTR>
        </STHead>
        <STBody>
          {data.map((obj, index) => (
            <STBodyTR key={index}>
              <STD>{index + 1}</STD>
              {keys.map((item, index) => {
                const value = obj[item];
                return <STD key={index}>{value}</STD>;
              })}
              <STD>{<button onClick={() => console.log(obj.id_iteraccion)}>REPROGRAMADO</button>}</STD>

            </STBodyTR>
          ))
          }
        </STBody>
      </STable>
    )
  } else {
    console.log(data)
    return (
      <h1>
        No hay intentos de cancelacion por ahora
      </h1>
    )
  }
}

export default Table