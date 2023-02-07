import LIST from "constants/list";
import Card from "components/Card/Card";
import style from "./style.module.scss";
import clsx from "clsx";
import usePageScroll from "hooks/usePageScroll";
import useDelayRender from "hooks/useDelayRender";

const List = (): JSX.Element => {
  const currentPage = usePageScroll();
  const indices = useDelayRender({ delay: 200, currentPage, limit: 20 });

  const currentList = LIST.slice(0, 20 * currentPage);

  return (
    <ul>
      {currentList.map((item, index) => (
        <>
          <Card
            key={index}
            className={clsx(
              style.card,
              indices.has(index) ? style.animate : ""
            )}
            {...item}
          />
        </>
      ))}
    </ul>
  );
};

export default List;
