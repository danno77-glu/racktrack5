import React from 'react';
    import './styles.css';
    import { formatDate } from '../../utils/dateFormatting';

    const ActivityLog = ({ logs }) => {
      if (!logs || logs.length === 0) {
        return <p className="no-activity">No recent activity.</p>;
      }

      return (
        <div className="activity-log">
          <p className="activity-header">Recent Activity:</p>
          <ul>
            {logs.map(log => (
              <li key={log.id} className="activity-item">
                <span className="activity-date">{formatDate(log.created_at)}</span>
                <span className="activity-type">Audit Created</span>
              </li>
            ))}
          </ul>
        </div>
      );
    };

    export default ActivityLog;
