export const servicesData = [
    {
      service: "order-platform",client: {requests: 767,rate: "0.85 req/s",p75: "26.97 ms",p90: "1.37 s",p99: "1.45 s",error: "0.40%",}, server: {requests: 769,rate: "0.85 req/s",p75: "25.87 ms",p90: "1.37 s",p99: "1.45 s",error: "0.38%",}
    },
    {
      service: "payment-gateway",
      client: {
        requests: 1023,
        rate: "1.12 req/s",
        p75: "32.97 ms",
        p90: "1.27 s",
        p99: "1.50 s",
        error: "0.25%",
      },
      server: {
        requests: 1045,
        rate: "1.14 req/s",
        p75: "31.87 ms",
        p90: "1.20 s",
        p99: "1.49 s",
        error: "0.22%",
      }
    },
    {
      service: "inventory-management",
      client: {
        requests: 850,
        rate: "0.95 req/s",
        p75: "21.97 ms",
        p90: "1.17 s",
        p99: "1.30 s",
        error: "0.50%",
      },
      server: {
        requests: 860,
        rate: "0.97 req/s",
        p75: "20.87 ms",
        p90: "1.15 s",
        p99: "1.28 s",
        error: "0.45%",
      }
    },
    {
      service: "user-authentication",
      client: {
        requests: 1200,
        rate: "1.25 req/s",
        p75: "15.97 ms",
        p90: "0.97 s",
        p99: "1.10 s",
        error: "0.15%",
      },
      server: {
        requests: 1225,
        rate: "1.28 req/s",
        p75: "14.87 ms",
        p90: "0.95 s",
        p99: "1.08 s",
        error: "0.13%",
      }
    },
    {
      service: "shipping-service",
      client: {
        requests: 980,
        rate: "1.05 req/s",
        p75: "18.97 ms",
        p90: "1.07 s",
        p99: "1.20 s",
        error: "0.30%",
      },
      server: {
        requests: 1000,
        rate: "1.08 req/s",
        p75: "17.87 ms",
        p90: "1.05 s",
        p99: "1.18 s",
        error: "0.28%",
      },
    },
    // 45 more similar objects
    {
      service: "notification-service",
      client: {
        requests: 790,
        rate: "0.90 req/s",
        p75: "29.97 ms",
        p90: "1.47 s",
        p99: "1.60 s",
        error: "0.35%",
      },
      server: {
        requests: 800,
        rate: "0.92 req/s",
        p75: "28.87 ms",
        p90: "1.45 s",
        p99: "1.58 s",
        error: "0.33%",
      },
    },
    {
      service: "analytics-service",
      client: {
        requests: 1400,
        rate: "1.50 req/s",
        p75: "12.97 ms",
        p90: "0.87 s",
        p99: "0.95 s",
        error: "0.10%",
      },
      server: {
        requests: 1425,
        rate: "1.55 req/s",
        p75: "11.87 ms",
        p90: "0.85 s",
        p99: "0.93 s",
        error: "0.08%",
      },
    },
    {
      service: "email-service",
      client: {
        requests: 600,
        rate: "0.65 req/s",
        p75: "35.97 ms",
        p90: "1.57 s",
        p99: "1.70 s",
        error: "0.50%",
      },
      server: {
        requests: 615,
        rate: "0.67 req/s",
        p75: "34.87 ms",
        p90: "1.55 s",
        p99: "1.68 s",
        error: "0.48%",
      },
    },
    {
      service: "reporting-service",
      client: {
        requests: 1100,
        rate: "1.20 req/s",
        p75: "24.97 ms",
        p90: "1.07 s",
        p99: "1.20 s",
        error: "0.20%",
      },
      server: {
        requests: 1120,
        rate: "1.23 req/s",
        p75: "23.87 ms",
        p90: "1.05 s",
        p99: "1.18 s",
        error: "0.18%",
      },
    },
    {
      service: "logging-service",
      client: {
        requests: 950,
        rate: "1.00 req/s",
        p75: "28.97 ms",
        p90: "1.27 s",
        p99: "1.40 s",
        error: "0.40%",
      },
      server: {
        requests: 970,
        rate: "1.02 req/s",
        p75: "27.87 ms",
        p90: "1.25 s",
        p99: "1.38 s",
        error: "0.38%",
      },
    },
    {
        service: "media-service",
        client: {
          requests: 1600,
          rate: "1.75 req/s",
          p75: "11.67 ms",
          p90: "0.82 s",
          p99: "0.90 s",
          error: "0.12%",
        },
        server: {
          requests: 1620,
          rate: "1.78 req/s",
          p75: "11.37 ms",
          p90: "0.80 s",
          p99: "0.88 s",
          error: "0.10%",
        },
      },
      {
        service: "search-service",
        client: {
          requests: 1350,
          rate: "1.50 req/s",
          p75: "16.47 ms",
          p90: "1.05 s",
          p99: "1.15 s",
          error: "0.18%",
        },
        server: {
          requests: 1380,
          rate: "1.53 req/s",
          p75: "15.97 ms",
          p90: "1.03 s",
          p99: "1.13 s",
          error: "0.15%",
        },
      },
      {
        service: "chat-service",
        client: {
          requests: 700,
          rate: "0.80 req/s",
          p75: "30.87 ms",
          p90: "1.45 s",
          p99: "1.55 s",
          error: "0.22%",
        },
        server: {
          requests: 725,
          rate: "0.85 req/s",
          p75: "29.97 ms",
          p90: "1.42 s",
          p99: "1.53 s",
          error: "0.20%",
        },
      },
      {
        service: "push-notification",
        client: {
          requests: 500,
          rate: "0.60 req/s",
          p75: "36.27 ms",
          p90: "1.60 s",
          p99: "1.75 s",
          error: "0.50%",
        },
        server: {
          requests: 515,
          rate: "0.63 req/s",
          p75: "35.47 ms",
          p90: "1.57 s",
          p99: "1.72 s",
          error: "0.48%",
        },
      },
      {
        service: "data-sync",
        client: {
          requests: 920,
          rate: "1.10 req/s",
          p75: "25.57 ms",
          p90: "1.22 s",
          p99: "1.32 s",
          error: "0.28%",
        },
        server: {
          requests: 940,
          rate: "1.12 req/s",
          p75: "24.87 ms",
          p90: "1.20 s",
          p99: "1.30 s",
          error: "0.26%",
        },
      },
      {
        service: "api-gateway",
        client: {
          requests: 1450,
          rate: "1.65 req/s",
          p75: "14.97 ms",
          p90: "0.97 s",
          p99: "1.07 s",
          error: "0.14%",
        },
        server: {
          requests: 1480,
          rate: "1.70 req/s",
          p75: "14.47 ms",
          p90: "0.95 s",
          p99: "1.05 s",
          error: "0.12%",
        },
      },
      {
        service: "billing-service",
        client: {
          requests: 1100,
          rate: "1.20 req/s",
          p75: "21.97 ms",
          p90: "1.17 s",
          p99: "1.25 s",
          error: "0.30%",
        },
        server: {
          requests: 1120,
          rate: "1.23 req/s",
          p75: "21.37 ms",
          p90: "1.15 s",
          p99: "1.23 s",
          error: "0.28%",
        },
      },
      {
        service: "recommendation-engine",
        client: {
          requests: 870,
          rate: "0.95 req/s",
          p75: "22.57 ms",
          p90: "1.12 s",
          p99: "1.20 s",
          error: "0.35%",
        },
        server: {
          requests: 890,
          rate: "0.98 req/s",
          p75: "22.07 ms",
          p90: "1.10 s",
          p99: "1.18 s",
          error: "0.33%",
        },
      },
      {
        service: "profile-service",
        client: {
          requests: 990,
          rate: "1.10 req/s",
          p75: "19.47 ms",
          p90: "1.07 s",
          p99: "1.15 s",
          error: "0.25%",
        },
        server: {
          requests: 1010,
          rate: "1.12 req/s",
          p75: "18.97 ms",
          p90: "1.05 s",
          p99: "1.13 s",
          error: "0.23%",
        },
      },
      {
        service: "geo-location",
        client: {
          requests: 1300,
          rate: "1.45 req/s",
          p75: "17.67 ms",
          p90: "0.92 s",
          p99: "1.02 s",
          error: "0.18%",
        },
        server: {
          requests: 1325,
          rate: "1.48 req/s",
          p75: "17.17 ms",
          p90: "0.90 s",
          p99: "1.00 s",
          error: "0.16%",
        },
      },
      {
        service: "queue-service",
        client: {
          requests: 760,
          rate: "0.85 req/s",
          p75: "27.87 ms",
          p90: "1.37 s",
          p99: "1.45 s",
          error: "0.40%",
        },
        server: {
          requests: 780,
          rate: "0.87 req/s",
          p75: "27.07 ms",
          p90: "1.35 s",
          p99: "1.43 s",
          error: "0.38%",
        },
      },
      {
        service: "streaming-service",
        client: {
          requests: 1700,
          rate: "1.90 req/s",
          p75: "10.97 ms",
          p90: "0.85 s",
          p99: "0.95 s",
          error: "0.10%",
        },
        server: {
          requests: 1725,
          rate: "1.93 req/s",
          p75: "10.47 ms",
          p90: "0.83 s",
          p99: "0.93 s",
          error: "0.08%",
        },
      },
      {
        service: "load-balancer",
        client: {
          requests: 1800,
          rate: "2.00 req/s",
          p75: "39.97 ms",
          p90: "0.75 s",
          p99: "0.85 s",
          error: "0.05%",
        },
        server: {
          requests: 1830,
          rate: "2.05 req/s",
          p75: "39.57 ms",
          p90: "0.73 s",
          p99: "0.83 s",
          error: "0.04%",
        },
      },
      {
        service: "machine-learning-service",
        client: {
          requests: 1150,
          rate: "1.30 req/s",
          p75: "20.87 ms",
          p90: "1.17 s",
          p99: "1.25 s",
          error: "0.22%",
        },
        server: {
          requests: 1175,
          rate: "1.35 req/s",
          p75: "20.37 ms",
          p90: "1.15 s",
          p99: "1.23 s",
          error: "0.20%",
        }
      },
      {
          service: "speech-recognition",
          client: {
            requests: 1400,
            rate: "1.55 req/s",
            p75: "14.67 ms",
            p90: "0.95 s",
            p99: "1.05 s",
            error: "0.18%",
          },
          server: {
            requests: 1425,
            rate: "1.60 req/s",
            p75: "14.17 ms",
            p90: "0.93 s",
            p99: "1.03 s",
            error: "0.16%",
          },
        },
        {
          service: "data-warehouse",
          client: {
            requests: 900,
            rate: "1.00 req/s",
            p75: "23.97 ms",
            p90: "1.27 s",
            p99: "1.35 s",
            error: "0.30%",
          },
          server: {
            requests: 925,
            rate: "1.03 req/s",
            p75: "23.47 ms",
            p90: "1.25 s",
            p99: "1.33 s",
            error: "0.28%",
          },
        },
        {
          service: "identity-service",
          client: {
            requests: 1600,
            rate: "1.80 req/s",
            p75: "12.57 ms",
            p90: "0.85 s",
            p99: "0.95 s",
            error: "0.12%",
          },
          server: {
            requests: 1625,
            rate: "1.83 req/s",
            p75: "12.17 ms",
            p90: "0.83 s",
            p99: "0.93 s",
            error: "0.10%",
          },
        },
        {
          service: "cache-service",
          client: {
            requests: 1750,
            rate: "2.05 req/s",
            p75: "10.87 ms",
            p90: "0.77 s",
            p99: "0.87 s",
            error: "0.08%",
          },
          server: {
            requests: 1775,
            rate: "2.10 req/s",
            p75: "10.37 ms",
            p90: "0.75 s",
            p99: "0.85 s",
            error: "0.06%",
          },
        },
        {
          service: "feature-flags",
          client: {
            requests: 620,
            rate: "0.70 req/s",
            p75: "34.97 ms",
            p90: "1.47 s",
            p99: "1.55 s",
            error: "0.40%",
          },
          server: {
            requests: 640,
            rate: "0.75 req/s",
            p75: "33.87 ms",
            p90: "1.45 s",
            p99: "1.53 s",
            error: "0.38%",
          },
        },
        {
          service: "content-management",
          client: {
            requests: 930,
            rate: "1.10 req/s",
            p75: "26.57 ms",
            p90: "1.22 s",
            p99: "1.30 s",
            error: "0.32%",
          },
          server: {
            requests: 950,
            rate: "1.13 req/s",
            p75: "25.87 ms",
            p90: "1.20 s",
            p99: "1.28 s",
            error: "0.30%",
          },
        },
        {
          service: "ai-service",
          client: {
            requests: 2000,
            rate: "2.20 req/s",
            p75: "38.97 ms",
            p90: "0.65 s",
            p99: "0.75 s",
            error: "0.04%",
          },
          server: {
            requests: 2025,
            rate: "2.25 req/s",
            p75: "38.57 ms",
            p90: "0.63 s",
            p99: "0.73 s",
            error: "0.03%",
          },
        },
        {
          service: "virtual-assistant",
          client: {
            requests: 1850,
            rate: "2.10 req/s",
            p75: "39.67 ms",
            p90: "0.77 s",
            p99: "0.87 s",
            error: "0.06%",
          },
          server: {
            requests: 1875,
            rate: "2.15 req/s",
            p75: "39.27 ms",
            p90: "0.75 s",
            p99: "0.85 s",
            error: "0.05%",
          },
        },
        {
          service: "bi-reporting",
          client: {
            requests: 1100,
            rate: "1.25 req/s",
            p75: "22.97 ms",
            p90: "1.15 s",
            p99: "1.25 s",
            error: "0.22%",
          },
          server: {
            requests: 1125,
            rate: "1.28 req/s",
            p75: "22.47 ms",
            p90: "1.13 s",
            p99: "1.23 s",
            error: "0.20%",
          },
        },
        {
          service: "ads-service",
          client: {
            requests: 1250,
            rate: "1.45 req/s",
            p75: "18.87 ms",
            p90: "1.00 s",
            p99: "1.10 s",
            error: "0.18%",
          },
          server: {
            requests: 1275,
            rate: "1.48 req/s",
            p75: "18.37 ms",
            p90: "0.98 s",
            p99: "1.08 s",
            error: "0.16%",
          },
        },
        {
          service: "event-streaming",
          client: {
            requests: 1500,
            rate: "1.70 req/s",
            p75: "13.97 ms",
            p90: "0.85 s",
            p99: "0.95 s",
            error: "0.14%",
          },
          server: {
            requests: 1525,
            rate: "1.75 req/s",
            p75: "13.47 ms",
            p90: "0.83 s",
            p99: "0.93 s",
            error: "0.12%",
          },
        },
        {
          service: "iot-service",
          client: {
            requests: 1650,
            rate: "1.85 req/s",
            p75: "12.17 ms",
            p90: "0.77 s",
            p99: "0.87 s",
            error: "0.10%",
          },
          server: {
            requests: 1675,
            rate: "1.90 req/s",
            p75: "11.87 ms",
            p90: "0.75 s",
            p99: "0.85 s",
            error: "0.08%",
          },
        },
        {
          service: "traffic-management",
          client: {
            requests: 1350,
            rate: "1.55 req/s",
            p75: "17.67 ms",
            p90: "1.05 s",
            p99: "1.12 s",
            error: "0.20%",
          },
          server: {
            requests: 1375,
            rate: "1.60 req/s",
            p75: "17.17 ms",
            p90: "1.03 s",
            p99: "1.10 s",
            error: "0.18%",
          },
        },
        {
          service: "order-processing",
          client: {
            requests: 1050,
            rate: "1.20 req/s",
            p75: "21.87 ms",
            p90: "1.15 s",
            p99: "1.22 s",
            error: "0.25%",
          },
          server: {
            requests: 1075,
            rate: "1.25 req/s",
            p75: "21.37 ms",
            p90: "1.13 s",
            p99: "1.20 s",
            error: "0.22%",
          },
        },
        {
          service: "workflow-automation",
          client: {
            requests: 1450,
            rate: "1.65 req/s",
            p75: "15.67 ms",
            p90: "0.97 s",
            p99: "1.07 s",
            error: "0.16%",
          },
          server: {
            requests: 1475,
            rate: "1.70 req/s",
            p75: "15.27 ms",
            p90: "0.95 s",
            p99: "1.05 s",
            error: "0.14%",
          },
    },
    {
      service: "analytics-service",
      client: {
        requests: 1200,
        rate: "1.35 req/s",
        p75: "18.47 ms",
        p90: "0.97 s",
        p99: "1.07 s",
        error: "0.22%",
      },
      server: {
        requests: 1225,
        rate: "1.38 req/s",
        p75: "18.07 ms",
        p90: "0.95 s",
        p99: "1.05 s",
        error: "0.20%",
      },
    },
    {
      service: "cdn-service",
      client: {
        requests: 1550,
        rate: "1.70 req/s",
        p75: "13.87 ms",
        p90: "0.82 s",
        p99: "0.92 s",
        error: "0.12%",
      },
      server: {
        requests: 1575,
        rate: "1.75 req/s",
        p75: "13.37 ms",
        p90: "0.80 s",
        p99: "0.90 s",
        error: "0.10%",
      },
    },
    {
      service: "user-authentication",
      client: {
        requests: 1400,
        rate: "1.55 req/s",
        p75: "15.27 ms",
        p90: "1.02 s",
        p99: "1.12 s",
        error: "0.18%",
      },
      server: {
        requests: 1425,
        rate: "1.58 req/s",
        p75: "14.87 ms",
        p90: "1.00 s",
        p99: "1.10 s",
        error: "0.16%",
      },
    },
    {
      service: "email-service",
      client: {
        requests: 1750,
        rate: "2.00 req/s",
        p75: "12.97 ms",
        p90: "0.75 s",
        p99: "0.85 s",
        error: "0.08%",
      },
      server: {
        requests: 1775,
        rate: "2.05 req/s",
        p75: "12.47 ms",
        p90: "0.73 s",
        p99: "0.83 s",
        error: "0.06%",
      },
    },
    {
      service: "payment-gateway",
      client: {
        requests: 1250,
        rate: "1.45 req/s",
        p75: "20.47 ms",
        p90: "1.10 s",
        p99: "1.20 s",
        error: "0.22%",
      },
      server: {
        requests: 1275,
        rate: "1.48 req/s",
        p75: "19.97 ms",
        p90: "1.08 s",
        p99: "1.18 s",
        error: "0.20%",
      },
    },
    {
      service: "content-delivery",
      client: {
        requests: 1600,
        rate: "1.85 req/s",
        p75: "16.27 ms",
        p90: "0.87 s",
        p99: "0.97 s",
        error: "0.14%",
      },
      server: {
        requests: 1625,
        rate: "1.88 req/s",
        p75: "15.87 ms",
        p90: "0.85 s",
        p99: "0.95 s",
        error: "0.12%",
      },
    },
    {
      service: "log-management",
      client: {
        requests: 1300,
        rate: "1.50 req/s",
        p75: "19.97 ms",
        p90: "1.12 s",
        p99: "1.22 s",
        error: "0.25%",
      },
      server: {
        requests: 1325,
        rate: "1.53 req/s",
        p75: "19.47 ms",
        p90: "1.10 s",
        p99: "1.20 s",
        error: "0.22%",
      },
    },
    {
      service: "image-processing",
      client: {
        requests: 1450,
        rate: "1.70 req/s",
        p75: "15.87 ms",
        p90: "0.92 s",
        p99: "1.02 s",
        error: "0.18%",
      },
      server: {
        requests: 1475,
        rate: "1.73 req/s",
        p75: "15.37 ms",
        p90: "0.90 s",
        p99: "1.00 s",
        error: "0.16%",
      },
    },
    {
      service: "api-rate-limiter",
      client: {
        requests: 1350,
        rate: "1.55 req/s",
        p75: "16.97 ms",
        p90: "0.98 s",
        p99: "1.08 s",
        error: "0.20%",
      },
      server: {
        requests: 1375,
        rate: "1.58 req/s",
        p75: "16.47 ms",
        p90: "0.95 s",
        p99: "1.05 s",
        error: "0.18%",
      },
    },
    {
      service: "push-service",
      client: {
        requests: 1700,
        rate: "1.90 req/s",
        p75: "14.97 ms",
        p90: "0.82 s",
        p99: "0.92 s",
        error: "0.12%",
      },
      server: {
        requests: 1725,
        rate: "1.93 req/s",
        p75: "14.47 ms",
        p90: "0.80 s",
        p99: "0.90 s",
        error: "0.10%",
      },
    },
    {
      service: "sms-service",
      client: {
        requests: 1800,
        rate: "2.10 req/s",
        p75: "13.97 ms",
        p90: "0.75 s",
        p99: "0.85 s",
        error: "0.10%",
      },
      server: {
        requests: 1825,
        rate: "2.13 req/s",
        p75: "13.47 ms",
        p90: "0.73 s",
        p99: "0.83 s",
        error: "0.08%",
      },
    },
    {
      service: "database-backup",
      client: {
        requests: 1200,
        rate: "1.35 req/s",
        p75: "21.97 ms",
        p90: "1.22 s",
        p99: "1.32 s",
        error: "0.30%",
      },
      server: {
        requests: 1225,
        rate: "1.38 req/s",
        p75: "21.37 ms",
        p90: "1.20 s",
        p99: "1.30 s",
        error: "0.28%",
      },
    },
    {
      service: "event-logging",
      client: {
        requests: 1250,
        rate: "1.45 req/s",
        p75: "20.47 ms",
        p90: "1.17 s",
        p99: "1.27 s",
        error: "0.26%",
      },
      server: {
        requests: 1275,
        rate: "1.48 req/s",
        p75: "19.97 ms",
        p90: "1.15 s",
        p99: "1.25 s",
        error: "0.24%",
      },
    },
    {
      service: "email-queue",
      client: {
        requests: 1650,
        rate: "1.85 req/s",
        p75: "16.47 ms",
        p90: "0.87 s",
        p99: "0.97 s",
        error: "0.16%",
      },
      server: {
        requests: 1675,
        rate: "1.88 req/s",
        p75: "15.97 ms",
        p90: "0.85 s",
        p99: "0.95 s",
        error: "0.14%",
      },
    },
    {
      service: "social-login",
      client: {
        requests: 1100,
        rate: "1.25 req/s",
        p75: "23.87 ms",
        p90: "1.25 s",
        p99: "1.35 s",
        error: "0.28%",
      },
      server: {
        requests: 1125,
        rate: "1.28 req/s",
        p75: "23.37 ms",
        p90: "1.23 s",
        p99: "1.33 s",
        error: "0.26%",
      }
    }
];
  