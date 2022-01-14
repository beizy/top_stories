import { Container, Row, Col } from "react-bootstrap"
import NewsCard from "./NewsCard"
import { v4 as uuidv4 } from "uuid"

export default function Newslist(props) {
  const { allArticles } = props
  const displayedArticles = allArticles.filter(ele => ele.multimedia).slice(0, 20)
  const cards = displayedArticles.map(article => (
    <Col key={uuidv4()} className="mt-3">
      <NewsCard
        title={article.title}
        abstract={article.abstract}
        section={article.section}
        imgUrl={article.multimedia[0].url}
        pdate={article.published_date.slice(0, 10)}
        udate={article.updated_date.slice(0, 10)}
        url={article.url}
        byline={article.byline}
      />
    </Col>
  ))

  return (
    <Container>
      <Row sm={{ cols: 1 }} md={{ cols: 2 }} lg={{ cols: 3 }} xl={{ cols: 4 }} className="no-gutters">
        {cards}
      </Row>
    </Container>
  )
}

//imgUlr={article.multimedia.url}
