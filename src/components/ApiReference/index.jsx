import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import { getTocFromItem } from './getTocFromItem';

import styles from './styles.module.css';

export function ApiReference({ sections }) {
  const [filterString, setFilterString] = useState('');

  const normalize = s => s?.toLowerCase().replace(/-/g, ' ');
  const matches = text => normalize(text)?.includes(filterString);

  const handleFilterChange = event => {
    setFilterString(normalize(event.target.value));
  };

  const getHeaders = item => {
    const id = item.docId.match(/[^/]+(?!.*\/)/)[0];
    const tocList = getTocFromItem(id);
    return tocList;
  };

  const sectionsList = sections.map(section => ({
    ...section,
    items: section.items.map(item => ({ ...item, headers: getHeaders(item) })),
  }));

  const filteredLists = sectionsList
    .map(section => {
      // section title match
      if (matches(section.label)) {
        return section;
      }
      // filter groups
      const matchedGroups = section.items
        .map(item => {
          // group title match
          if (matches(item.label)) {
            return item;
          }
          // filter headers
          const matchedHeaders = item.headers.filter(({ value }) =>
            matches(value)
          );
          return matchedHeaders.length
            ? { label: item.label, link: item.href, headers: matchedHeaders }
            : null;
        })
        .filter(i => i);

      return matchedGroups.length
        ? { label: section.label, items: matchedGroups }
        : null;
    })
    .filter(i => i);

  return (
    <div className={styles.test}>
      <div className={styles.header}>
        <h1>API Reference</h1>
        <div className="api-filter">
          <label>
            Filter
            <input
              type="search"
              placeholder="Enter keyword"
              value={filterString}
              onChange={handleFilterChange}
            />
          </label>
          {filteredLists.map(({ label, items }) => {
            return (
              <div key={label}>
                <h2>{label}</h2>
                {items.map(({ label, headers, href }) => {
                  return (
                    <div key={label}>
                      <Link to={href}>
                        <h3>{label}</h3>
                      </Link>
                      {headers.map(({ id, value }) => {
                        return (
                          <Link key={id} to={`${href}#${id}`}>
                            {value}
                          </Link>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
