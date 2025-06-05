import React, { useState, useEffect } from 'react';

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputSection: {
    padding: '20px',
    borderRadius: '8px',
  },
  innerInputSection: {
    padding: '0 20px',
    borderRadius: '8px',
  },
  inputTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
  },
  select: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
  },
  resultsSection: {
    flex: '1',
    padding: '20px',
  },
  resultItem: {
    padding: '15px',
    marginBottom: '15px',
    borderRadius: '8px',
  },
  resultLabel: {
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  resultValue: {
    fontSize: '18px',
    marginBottom: '5px',
  },
  resultExplanation: {
    fontSize: '14px',
  },
  assumptions: {
    padding: '15px',
    borderRadius: '8px',
    marginTop: '20px',
  },
  assumptionsTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  assumptionsList: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    fontSize: '14px',
  },
  errorMessage: {
    marginBottom: '10px',
  },
};

const CostCalculator = () => {
  const [gasPrice, setGasPrice] = useState(1.419);
  const [ethPrice, setEthPrice] = useState(2700);
  const [daThroughputLog, setDAThroughputLog] = useState(Math.log10(30000));
  const [rollupFramework, setRollupFramework] = useState('OP Stack');
  const [maxBatchInterval, setMaxBatchInterval] = useState(3600); // Default to 1 hour
  const [results, setResults] = useState({
    gasNeeded: 0,
    batchPostingPeriod: 0,
    gasTotal: 0,
    gasTotalUsd: 0,
    batchesPerDay: 0,
    gasTotalDailyUsd: 0,
    eigenDACostUSD: 0,
    eigenDADailyCostUSD: 0,
    totalCostPerBatchUSD: 0,
    totalDailyCostUSD: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEthPrice = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'
      );
      if (!response.ok) throw new Error('Failed to fetch ETH price');
      const data = await response.json();
      return data.ethereum.usd;
    } catch (error) {
      console.error('Error fetching ETH price:', error);
      return null;
    }
  };

  const fetchGasPrice = async () => {
    try {
      const response = await fetch(
        'https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=G9264S2QNFC197AKJC1DFAC4DBPZHHT6MM'
      );
      if (!response.ok) throw new Error('Failed to fetch gas price');
      const data = await response.json();
      if (data.status !== '1')
        throw new Error(data.message || 'Failed to fetch gas price');
      return parseFloat(data.result.SafeGasPrice);
    } catch (error) {
      console.error('Error fetching gas price:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchPrices = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const [newEthPrice, newGasPrice] = await Promise.all([
          fetchEthPrice(),
          fetchGasPrice(),
        ]);
        if (newEthPrice) setEthPrice(newEthPrice);
        if (newGasPrice) setGasPrice(newGasPrice);
      } catch (err) {
        setError('Failed to fetch latest prices. Using default values.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrices();
  }, []);

  const formatBytes = (bytes) => {
    const units = ['B', 'KiB', 'MiB', 'GiB'];
    let value = bytes;
    let unitIndex = 0;
    while (value >= 1024 && unitIndex < units.length - 1) {
      value /= 1024;
      unitIndex++;
    }
    return `${value.toFixed(2)} ${units[unitIndex]}`;
  };

  const getDAThroughput = () => Math.pow(10, daThroughputLog);

  const calculate = () => {
    const bytes_per_mib = 1048576;
    const eigen_da_blob_ref_len = 1000;
    let blobSizeMiB, gas_needed;
    if (rollupFramework === 'OP Stack') {
      gas_needed = 21000 + eigen_da_blob_ref_len * 16;
      blobSizeMiB = 16;
    } else if (rollupFramework === 'Arb Orbit') {
      gas_needed = 151348;
      blobSizeMiB = 2;
    }
    const blobSizeGiB = blobSizeMiB / 1024;
    const gwei_per_eth = 1000000000;
    const daThroughputBytes = getDAThroughput();
    const eigenDACostPerGiB = 0.015; // ETH per GiB

    const batch_posting_period_seconds =
      (blobSizeMiB * bytes_per_mib) / daThroughputBytes;
    const gas_total = gas_needed * gasPrice;
    const gas_total_usd = (gas_total / gwei_per_eth) * ethPrice;

    const dayLength = 24 * 60 * 60; // seconds in a day
    const batches_per_day = Math.max(
      dayLength / maxBatchInterval,
      dayLength / batch_posting_period_seconds
    );

    const gas_total_daily_usd = batches_per_day * gas_total_usd;

    const eigenDACostETH = blobSizeGiB * eigenDACostPerGiB;
    const eigenDACostUSD = eigenDACostETH * ethPrice;
    const eigenDADailyCostUSD = eigenDACostUSD * batches_per_day;

    const totalCostPerBatchUSD = gas_total_usd + eigenDACostUSD;
    const totalDailyCostUSD = gas_total_daily_usd + eigenDADailyCostUSD;

    return {
      gasNeeded: gas_needed,
      batchPostingPeriod: batch_posting_period_seconds,
      gasTotal: gas_total,
      gasTotalUsd: gas_total_usd,
      batchesPerDay: batches_per_day,
      gasTotalDailyUsd: gas_total_daily_usd,
      eigenDACostUSD: eigenDACostUSD,
      eigenDADailyCostUSD: eigenDADailyCostUSD,
      totalCostPerBatchUSD: totalCostPerBatchUSD,
      totalDailyCostUSD: totalDailyCostUSD,
      blobSizeMiB: blobSizeMiB,
    };
  };

  useEffect(() => {
    setResults(calculate());
  }, [
    gasPrice,
    ethPrice,
    daThroughputLog,
    rollupFramework,
    maxBatchInterval,
  ]);

  const ResultItem = ({ label, value, explanation }) => (
    <div style={styles.resultItem}>
      <div style={styles.resultLabel}>{label}:</div>
      <div style={styles.resultValue}>{value}</div>
      <div style={styles.resultExplanation}>{explanation}</div>
    </div>
  );

  if (isLoading) {
    return <div style={styles.container}>Loading price data...</div>;
  }

  return (
    <div style={styles.container}>
      {error && <div style={styles.errorMessage}>{error}</div>}
      <div style={styles.grid}>
        <div style={styles.inputSection}>
          <h2 style={styles.inputTitle}>Input Parameters</h2>
          <div style={styles.innerInputSection}>
            <div style={styles.inputGroup}>
              <label style={styles.label} htmlFor="rollupFramework">
                Rollup Framework
              </label>
              <select
                id="rollupFramework"
                value={rollupFramework}
                onChange={(e) => setRollupFramework(e.target.value)}
                style={styles.select}
              >
                <option value="OP Stack">OP Stack</option>
                <option value="Arb Orbit">Arb Orbit</option>
              </select>
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label} htmlFor="gasPrice">
                Gas Price (Gwei)
              </label>
              <input
                id="gasPrice"
                type="number"
                value={gasPrice}
                onChange={(e) => setGasPrice(Number(e.target.value))}
                step="0.001"
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label} htmlFor="ethPrice">
                ETH Price (USD)
              </label>
              <input
                id="ethPrice"
                type="number"
                value={ethPrice}
                onChange={(e) => setEthPrice(Number(e.target.value))}
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label} htmlFor="daThroughput">
                DA Throughput
              </label>
              <input
                id="daThroughput"
                type="range"
                min={3}
                max={8}
                step={0.01}
                value={daThroughputLog}
                onChange={(e) => setDAThroughputLog(Number(e.target.value))}
                style={styles.input}
              />
              <div style={{ textAlign: 'center', marginTop: '5px' }}>
                {formatBytes(getDAThroughput())}/second
              </div>
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label} htmlFor="maxBatchInterval">
                Max Batch Interval (seconds)
              </label>
              <input
                id="maxBatchInterval"
                type="number"
                value={maxBatchInterval}
                onChange={(e) => setMaxBatchInterval(Number(e.target.value))}
                step="1"
                style={styles.input}
              />
            </div>
          </div>
        </div>

        <div style={styles.resultsSection}>
          <h2 style={styles.inputTitle}>Results</h2>
          <ResultItem
            label="Gas Needed"
            value={results.gasNeeded.toLocaleString()}
            explanation={
              rollupFramework === 'OP Stack'
                ? `Transfer cost (21000) + Cost per calldata byte (16) * Eigen DA blob ref length (1000) = ${results.gasNeeded}`
                : `Fixed gas cost for Arb Orbit = ${results.gasNeeded}`
            }
          />
          <ResultItem
            label="Batch Posting Period"
            value={`${results.batchPostingPeriod.toFixed(2)} seconds`}
            explanation={`Blob size (${results.blobSizeMiB}MB) / DA Throughput (${formatBytes(
              getDAThroughput()
            )}/s) = ${results.batchPostingPeriod.toFixed(2)} seconds`}
          />
          <ResultItem
            label="Gas Total"
            value={`${results.gasTotal.toLocaleString()} Gwei`}
            explanation={`Gas Needed (${results.gasNeeded}) * Gas Price (${gasPrice}) = ${results.gasTotal.toLocaleString()} Gwei`}
          />
          <ResultItem
            label="Gas cost per batch USD"
            value={`$${results.gasTotalUsd.toFixed(2)}`}
            explanation={`(Gas Total (${results.gasTotal.toLocaleString()} Gwei) / Gwei per ETH (1000000000)) * ETH Price ($${ethPrice}) = $${results.gasTotalUsd.toFixed(
              2
            )}`}
          />
          <ResultItem
            label="EigenDA cost per batch USD"
            value={`$${results.eigenDACostUSD.toFixed(2)}`}
            explanation={`(Blob size (${results.blobSizeMiB}MB) / 1GB) * 0.015 ETH/GB * ETH Price ($${ethPrice}) = $${results.eigenDACostUSD.toFixed(
              2
            )}`}
          />
          <ResultItem
            label="Total cost per batch USD"
            value={`$${results.totalCostPerBatchUSD.toFixed(2)}`}
            explanation={`Gas cost per batch ($${results.gasTotalUsd.toFixed(
              2
            )}) + EigenDA cost per batch ($${results.eigenDACostUSD.toFixed(
              2
            )}) = $${results.totalCostPerBatchUSD.toFixed(2)}`}
          />
          <ResultItem
            label="Batches Per Day"
            value={results.batchesPerDay.toFixed(2)}
            explanation={`Maximum of (Day Length (86400) / Max Batch Interval (${maxBatchInterval}), Day Length (86400) / Batch Posting Period (${results.batchPostingPeriod.toFixed(
              2
            )})) = ${results.batchesPerDay.toFixed(2)}`}
          />
          <ResultItem
            label="Total Daily Cost"
            value={`$${results.totalDailyCostUSD.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`}
            explanation={`(Total cost per batch ($${results.totalCostPerBatchUSD.toFixed(
              2
            )})) * Batches Per Day (${results.batchesPerDay.toFixed(
              2
            )}) = $${results.totalDailyCostUSD.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`}
          />
        </div>
      </div>

      <div style={styles.assumptions}>
        <h3 style={styles.assumptionsTitle}>Calculation assumptions:</h3>
        <ul style={styles.assumptionsList}>
          <li>Blob size: {results.blobSizeMiB} MiB</li>
          <li>OP Stack batch posting gas cost: 21000 + 1000 * 16</li>
          <li>Arb Orbit batch posting gas cost: 151348</li>
          <li>Eigen DA blob ref length: 1000 bytes</li>
          <li>
            DA Throughput range: 1 KB/s to 100 MB/s (logarithmic scale)
          </li>
          <li>EigenDA cost: 0.015 ETH/GB</li>
          <li>
            Only calculates rollup batch settlement costs, ignoring bridge
            settlement costs.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CostCalculator;
