import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { getTocFromId } from './getTocFromId';

import styles from './styles.module.css';

export function ApiReference({ sections }) {
  const [filterString, setFilterString] = useState('');
  const [sectionsList, setSectionsList] = useState([]);

  const normalize = s => s?.toLowerCase().replace(/-/g, ' ');
  const matches = text => normalize(text)?.includes(filterString);

  const handleFilterChange = event => {
    setFilterString(normalize(event.target.value));
  };

  const getHeaders = item => {
    const id = item.docId.match(/[^/]+(?!.*\/)/)[0];
    const tocList = getTocFromId(id);
    return tocList;
  };

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

  useEffect(() => {
    setSectionsList(
      sections.map(section => ({
        ...section,
        items: section.items.map(item => ({
          ...item,
          headers: getHeaders(item),
        })),
      }))
    );
  }, [sections]);

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h1>API Reference</h1>
        <div className={styles.filter}>
          <label htmlFor="filter-bar">Filter</label>
          <input
            id="filter-bar"
            type="search"
            placeholder="Enter keyword"
            value={filterString}
            onChange={handleFilterChange}
          />
        </div>
      </div>

      {filteredLists.length ? (
        filteredLists.map(({ label, items }) => {
          return (
            <div className={styles.section} key={label}>
              <h2>{label}</h2>
              <div className={styles.groups}>
                {items.map(({ label, headers, href }) => {
                  return (
                    <div className={styles.group} key={label}>
                      <Link to={href}>
                        <h3>{label}</h3>
                      </Link>
                      <ul>
                        {headers.map(({ id, value }) => {
                          return (
                            <li key={id}>
                              <Link to={`${href}#${id}`}>{value}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })
      ) : (
        <div className={styles.noMatch}>
          No API matching "{filterString}" found.
        </div>
      )}
    </div>
  );
}
