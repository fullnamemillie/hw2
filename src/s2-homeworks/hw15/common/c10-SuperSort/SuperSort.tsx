import React from "react";

const downIcon = "▼";
const upIcon = "▲";
const noneIcon = "⇅";

export type SuperSortPropsType = {
  id?: string;
  sort: string; // текущее состояние сортировки (например: '1tech', '0tech', '')
  value: string; // имя колонки для сортировки (например: 'tech' или 'developer')
  onChange: (newSort: string) => void;
};

/**
 * pureChange – переключает состояние сортировки:
 * '' -> down -> up -> ''
 */
export const pureChange = (sort: string, down: string, up: string): string => {
  // если сейчас сортировка вниз для этой колонки – переключаем на вверх
  if (sort === down) return up;
  // если сейчас вверх – сбрасываем сортировку
  if (sort === up) return "";
  // если сортировка выключена или стоит на другой колонке – включаем вниз
  return down;
};

const SuperSort: React.FC<SuperSortPropsType> = ({
  sort,
  value,
  onChange,
  id = "hw15",
}) => {
  // '1' + value = сортировка по возрастанию
  const up = "0" + value;
  // '0' + value = сортировка по убыванию
  const down = "1" + value;

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up));
  };

  const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon;

  return (
    <span
      id={id + "-sort-" + value}
      onClick={onChangeCallback}
      style={{ cursor: "pointer", userSelect: "none" }}
    >
      {icon}
    </span>
  );
};

export default SuperSort;
