import { FC, useState } from "react";
import { Pagination, PaginationProps } from "antd";

const CustomPagination: FC = () => {
  const [current, setCurrent] = useState<number>(1);

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrent(page);
  };

  return (<>
  <Pagination current={current} onChange={onChange} />
  </>)
};

export default CustomPagination;