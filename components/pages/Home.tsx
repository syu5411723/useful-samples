// import styled from 'styled-components'
// import { ItemList } from '../molcules/main/ItemList'


// const PostData = [
//     {
//         id: "1",
//         title: "1",
//         text: "1",
//         image: "",
//     },
// ]

// const Container = styled.div``
// const ListWrapper = styled.div``

// export const Home = () => {

//     return (
//         <Container>
//             <ListWrapper>
//                 {PostData.map(data => (
//                     <div key={data.id}>
//                         <ItemList data={data} />
//                     </div>
//                 ))}
//             </ListWrapper>
//         </Container>
//     )
// }

import styled from 'styled-components'
import { Item } from '../molcules/main/Item'
import { ItemList } from '../molcules/main/ItemList'

const PostData = [
    {
        id: "1",
        title: "1",
        text: "1",
        image: "",
    },
]

const Container = styled.div`
    margin-top: 200px;
`
const ListWrapper = styled.div``


export const Home = () => {
    return (
        <Container>
            <ListWrapper>
                <Item data={PostData} />
            </ListWrapper>
        </Container>
    )
}


