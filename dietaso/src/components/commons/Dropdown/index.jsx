import React from 'react';

import { Select } from 'antd';

const Dropdown = ({ data, placeholder, onChange, onSearch, defaultOption }) => {
    const { Option } = Select;

    return (
        <>
            {data?.length > 0 && (
                <Select
                    style={{ width: '100%' }}
                    defaultValue={defaultOption}
                    value={defaultOption}
                    allowClear
                    placeholder={placeholder}
                    onChange={onChange}
                    onSearch={onSearch}
                    showSearch={onSearch ? true : false}
                    filterOption={(input, option) =>
                        option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                    }>
                    {data.map((option) => (
                        <Option key={option.id} value={option.description}>
                            {option.description}
                        </Option>
                    ))}
                </Select>
            )}
        </>
    );
};

export default Dropdown;
