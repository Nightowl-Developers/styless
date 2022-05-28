import * as React from 'react';
import clsx from 'clsx';

export interface ListProps<ListItemProps> {
    data: ListItemProps;
    renderItem: React.ReactNode;
}

const List = <ListItemProps extends object>({
    data,
    renderItem
}: ListProps<ListItemProps>) => {
    return <ul>
        {}
    </ul>;
};

List.displayName = 'List';

export default List;

