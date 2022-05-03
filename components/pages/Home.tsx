import styled from 'styled-components'
import { PostData } from '../../lib/PostData'
import { pc, sp, tab } from '../design/Media'
import { Item } from '../molcules/main/Item'

const Container = styled.div`
    margin-top: 60px;
    padding: 50px 0 ;
    background-color:#3F3F3F;
`
const ListWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content:space-between;
    flex-wrap:wrap;
    ${sp`

    `}
    ${tab ``}
    ${pc ``}
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


