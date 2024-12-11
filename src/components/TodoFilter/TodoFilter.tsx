import React from 'react';

type Props = {
  onSearch: (value: string) => void;
  onStatusChange: (value: string) => void;
  onClear: () => void;
};

export const TodoFilter: React.FC<Props> = ({
  onSearch,
  onStatusChange,
  onClear,
}) => {
  const [query, setQuery] = React.useState('');
  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  const handleClear = () => {
    if (query === '') {
      return;
    }

    setQuery('');
    onClear();
  };

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            onChange={event => onStatusChange(event.target.value)}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={query}
          onChange={handleQueryChange}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          {query !== '' && (
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={handleClear}
            />
          )}
        </span>
      </p>
    </form>
  );
};
