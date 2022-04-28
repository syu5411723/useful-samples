
import styled from 'styled-components'
import { Item } from '../../molcules/main/Item'


const PostData = [
    {
        id: "1",
        title: "1",
        text: "1",
        img: "/",
        date: "2022"
    },
    {
        id: "1",
        title: "1",
        text: "1",
        img: "/",
        date: "2022"
    },
]

const Container = styled.div`
    display:flex;
    justify-content:center;
`
const ListWrapper = styled.div`
    width: 80%;
    display:flex;
    justify-content:space-between;
`

export const Main = () => {

    return (
        <Container>
            <ListWrapper>
                {PostData.map(data => (
                    <div key={data.id}>
                        <Item data={data} />
                    </div>
                ))}
            </ListWrapper>
        </Container>
    )
}
