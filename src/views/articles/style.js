import styled from 'styled-components';

//颜色对象
export const Color = function (opacity){
    let cell = {}
    cell.r = Math.floor(Math.random()*255);
    cell.g = Math.floor(Math.random()*255);
    cell.b = Math.floor(Math.random()*255);
    cell.color = 'rgba('+ cell.r +','+ cell.g +','+ cell.b +',' + (opacity || '0.8') + ')';
    return cell.color
}

export const ArticleUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 40px;
    align-items: center;
`


export const ArticleLi = styled.li`
    padding: 15px; 
    height: 200px;
    width: 200px;
    border: 1px solid #eee;
    margin: 10px;
    border-radius: 50%;
    color: #000;
    cursor: pointer;
    box-shadow: 0 0 8px 2px #fff;
    &:hover {
        background-color: rgba(255, 255, 255, 0.8);
    }
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
        line-height: 30px;
    }
    .desc {
        flex: 1;
        text-indent: 15px;
    }
    .date {
        text-align: right;
    }
`