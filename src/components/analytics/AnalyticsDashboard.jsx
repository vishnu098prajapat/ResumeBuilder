import React from 'react';
import styled from 'styled-components';
import { useAnalytics } from '../../contexts/AnalyticsContext';

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h2`
  color: #2c3e50;
  margin-bottom: 2rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  h3 {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .value {
    font-size: 2rem;
    color: ${props => props.color};
    font-weight: 600;
  }
`;

const Chart = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
`;

const AnalyticsDashboard = ({ resumeId }) => {
  const { getResumeStats } = useAnalytics();
  const stats = getResumeStats(resumeId);

  return (
    <Container>
      <Title>Resume Analytics</Title>
      
      <StatsGrid>
        <StatCard color="#3498db">
          <h3>Total Views</h3>
          <div className="value">{stats.views}</div>
        </StatCard>
        
        <StatCard color="#2ecc71">
          <h3>Downloads</h3>
          <div className="value">{stats.downloads}</div>
        </StatCard>
        
        <StatCard color="#9b59b6">
          <h3>Shares</h3>
          <div className="value">{stats.shares}</div>
        </StatCard>
      </StatsGrid>

      <Chart>
        {/* Here we can add charts using libraries like recharts or chart.js */}
        <h3>Activity Over Time</h3>
        {/* Chart implementation */}
      </Chart>
    </Container>
  );
};

export default AnalyticsDashboard; 