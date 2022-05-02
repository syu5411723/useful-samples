import styled from 'styled-components'
import { PostData } from '../../lib/PostData'
import { Item } from '../molcules/main/Item'

const Container = styled.div`
    margin-top: 200px;
    background-color:#3F3F3F;
`
const ListWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content:space-between;
    flex-wrap:wrap;
`


export const Home = () => {
    return (
        <Container>
            <ListWrapper>
                {PostData.map(data => (
                    <Item key={data.id} data={data} />
                ))}
            </ListWrapper>
        </Container>
    )
}


