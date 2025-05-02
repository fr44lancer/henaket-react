import type { Meta, StoryObj } from '@storybook/react';
import { AppTable } from '@/src/components/henaket/AppTable';
import { useState } from 'react';

const meta: Meta<typeof AppTable> = {
  title: 'Henaket/AppTable',
  component: AppTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppTable>;

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const dataSource: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

export const Default: Story = {
  args: {
    dataSource,
    columns,
  },
};

export const Compact: Story = {
  args: {
    dataSource,
    columns,
    variant: 'compact',
  },
};

export const WithSelection: Story = {
  render: () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
      setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
    };

    return (
      <AppTable
        rowSelection={rowSelection}
        dataSource={dataSource}
        columns={columns}
      />
    );
  },
};

export const WithCustomPagination: Story = {
  args: {
    dataSource,
    columns,
    pagination: {
      pageSize: 2,
      showSizeChanger: false,
    },
  },
};

export const WithLoading: Story = {
  args: {
    dataSource: [],
    columns,
    loading: true,
  },
}; 