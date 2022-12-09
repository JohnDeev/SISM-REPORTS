import { ContainerList, Item, List } from './UncanceledElement'

export const UncanceledList = ({ data }) => {
  console.log(data)
  return (

    <ContainerList>
      {
        data.map((item, index) => {

          return (
            <List>
              <Item>
                {item.Identificación_usuario}
              </Item>
              <Item>
                {item.nombre}
              </Item>
              <Item>
                {item.Teléfono}
              </Item>
              <Item>
                {item.celular_iteraccion}
              </Item>
              <Item>
                {item.fecha_iteraccion}
              </Item>
              <Item>
                {item.hora_iteraccion}
              </Item>
            </List>
          )
        })
      }
    </ContainerList>
  )
}
