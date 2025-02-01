import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';

const AnalyticsContext = createContext();

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

export const AnalyticsProvider = ({ children }) => {
  const [analytics, setAnalytics] = useState(() => {
    const saved = localStorage.getItem('resumeAnalytics');
    return saved ? JSON.parse(saved) : {
      views: {},
      downloads: {},
      shares: {}
    };
  });

  // Use ref to prevent infinite loop
  const analyticsRef = useRef(analytics);
  analyticsRef.current = analytics;

  // Save to localStorage when analytics changes
  useEffect(() => {
    localStorage.setItem('resumeAnalytics', JSON.stringify(analyticsRef.current));
  }, []);

  const trackView = useCallback((resumeId) => {
    if (!resumeId) return;
    
    // Check if already viewed in this session
    if (analyticsRef.current.views[`${resumeId}_session`]) return;

    setAnalytics(prev => {
      const newAnalytics = {
        ...prev,
        views: {
          ...prev.views,
          [resumeId]: (prev.views[resumeId] || 0) + 1,
          [`${resumeId}_session`]: true // Mark as viewed in this session
        }
      };
      return newAnalytics;
    });
  }, []);

  const trackDownload = useCallback((resumeId) => {
    if (!resumeId) return;
    
    setAnalytics(prev => ({
      ...prev,
      downloads: {
        ...prev.downloads,
        [resumeId]: (prev.downloads[resumeId] || 0) + 1
      }
    }));
  }, []);

  const trackShare = useCallback((resumeId) => {
    if (!resumeId) return;
    
    setAnalytics(prev => ({
      ...prev,
      shares: {
        ...prev.shares,
        [resumeId]: (prev.shares[resumeId] || 0) + 1
      }
    }));
  }, []);

  const getResumeStats = useCallback((resumeId) => {
    return {
      views: analyticsRef.current.views[resumeId] || 0,
      downloads: analyticsRef.current.downloads[resumeId] || 0,
      shares: analyticsRef.current.shares[resumeId] || 0
    };
  }, []);

  const value = {
    trackView,
    trackDownload,
    trackShare,
    getResumeStats
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
}; 