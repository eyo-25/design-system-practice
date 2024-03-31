import { useState } from "react";
import TagButton from "./TagButton";

interface ITagListProps<T extends string> {
  tagList: T[];
  onTagClick: (tag: T) => void;
}

export default function TagList<T extends string>({
  tagList,
  onTagClick,
}: ITagListProps<T>) {
  const [selectedTag, setSelectedTag] = useState<T>(tagList[0]);

  return (
    <div
      onClick={(event) => {
        const eventTarget = event.target as HTMLElement;
        const tag = eventTarget.textContent as T;
        onTagClick(tag);
      }}
      className="flex gap-x-4"
    >
      {tagList.map((tag) => (
        <TagButton
          key={tag}
          isChecked={tag === selectedTag}
          onClick={() => setSelectedTag(tag)}
        >
          {tag}
        </TagButton>
      ))}
    </div>
  );
}
