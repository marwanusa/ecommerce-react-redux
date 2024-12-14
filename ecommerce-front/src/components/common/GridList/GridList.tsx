import { Col, Row } from "react-bootstrap";

type GridListProps<T> = {
    records: T[];
    empty:string;
    renderItem: (record: T) => React.ReactNode
}
type HasId = { id?: number }
const GridList = <T extends HasId>({ records, renderItem ,empty}: GridListProps<T>) => {
    const categoriesList = records.length > 0 ? records.map((record) =>
        <Col key={record.id} xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
            {renderItem(record)}
        </Col>
    ) : empty;
    return (
        <Row>
            {categoriesList}
        </Row>
    )
}

export default GridList