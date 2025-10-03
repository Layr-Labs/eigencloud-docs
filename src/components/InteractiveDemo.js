import React, { useState, useEffect } from 'react';

export default function InteractiveDemo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [output, setOutput] = useState(['']);
  const [outputComplete, setOutputComplete] = useState(false);
  const terminalRef = React.useRef(null);

  const steps = [
    {
      command: 'eigenx app create my-trading-bot typescript',
      output: [
        '🚀 Creating app from typescript template...',
        '✅ Created my-trading-bot/',
        '✅ Generated index.ts',
        '✅ Added package.json',
        '✅ Created Dockerfile for TEE deployment',
        '',
        'cd my-trading-bot'
      ]
    },
    {
      command: 'cat index.ts',
      output: [
        'import { mnemonicToAccount } from "viem/accounts"',
        '',
        '// Access your app\'s wallet',
        'const wallet = mnemonicToAccount(process.env.MNEMONIC)',
        '',
        'console.log("Address:", wallet.address)',
        '',
        '// Now your app can:',
        '// - Hold funds autonomously',
        '// - Sign transactions and messages',
        '// - Interact with any blockchain'
      ]
    },
    {
      command: 'eigenx app deploy',
      output: [
        '🏗️  Building Docker image...',
        '   ✓ Built: my-trading-bot:latest',
        '',
        '📤 Pushing to registry...',
        '   ✓ Pushed: docker.io/my-trading-bot:latest',
        '',
        '⛓️  Submitting to blockchain...',
        '   ✓ Transaction confirmed',
        '',
        '🚀 Deploying to TEE...',
        '   ✓ Instance provisioned',
        '   ✓ Running in Intel TDX',
        '',
        '✅ Deployment complete!',
        '   App Name: my-trading-bot',
        '   Docker Digest: sha256:4f6c2b3a...',
        'Wallet Addresses:',
        '   Ethereum: 0xa4Cae7029dfe122866F479E3b6eFb88dA3b35aea',
        '   Solana: 6Xu2q4nifx9pfdwLtvAHSfGnXhXUJhnjWqcDhfhT1vpY',
      ]
    }
  ];

  const typeCommand = (step) => {
    if (step >= steps.length) return;

    setIsTyping(true);
    setOutput([]);
    setOutputComplete(false);

    // Show output gradually
    setIsTyping(false);
    let outputIndex = 0;
    const showOutput = () => {
      if (outputIndex < steps[step].output.length) {
        setOutput(prev => [...prev, steps[step].output[outputIndex]]);
        outputIndex++;
        setTimeout(showOutput, 100);
      } else {
        setOutputComplete(true);
        // Scroll to bottom when output is complete
        setTimeout(() => {
          if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
          }
        }, 100);
      }
    };
    setTimeout(showOutput, 300);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && currentStep < steps.length && !isTyping && (currentStep === 0 || outputComplete)) {
      typeCommand(currentStep);
      setCurrentStep(currentStep + 1);
    }
  };

  const handleClick = () => {
    if (currentStep < steps.length && !isTyping && (currentStep === 0 || outputComplete)) {
      typeCommand(currentStep);
      setCurrentStep(currentStep + 1);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setOutput(['']);
    setIsTyping(false);
    setOutputComplete(false);
  };

  const styles = {
    terminal: {
      backgroundColor: '#1e1e1e',
      color: '#d4d4d4',
      padding: '1.5rem',
      borderRadius: '8px',
      fontFamily: 'Monaco, Menlo, "Courier New", monospace',
      fontSize: '14px',
      minHeight: '400px',
      maxHeight: '500px',
      overflowY: 'auto',
      marginBottom: '1rem',
      border: '1px solid #333'
    },
    prompt: {
      color: '#569cd6',
      marginRight: '0.5rem'
    },
    command: {
      color: '#9cdcfe'
    },
    output: {
      color: '#ce9178',
      marginTop: '0.5rem',
      lineHeight: '1.6'
    },
    cursor: {
      display: 'inline-block',
      width: '8px',
      height: '18px',
      backgroundColor: '#d4d4d4',
      animation: 'blink 1s infinite',
      verticalAlign: 'text-bottom'
    },
    hint: {
      color: '#6a9955',
      marginTop: '1rem',
      fontSize: '13px'
    },
    button: {
      backgroundColor: '#0066cc',
      color: 'white',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      cursor: 'pointer',
      marginRight: '0.5rem',
      fontSize: '14px'
    },
    buttonSecondary: {
      backgroundColor: 'transparent',
      color: '#0066cc',
      border: '1px solid #0066cc',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px'
    }
  };

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [currentStep, isTyping]);

  return (
    <div>
      <div
        ref={terminalRef}
        style={styles.terminal}
        onClick={handleClick}
        role="button"
        tabIndex={0}
      >
        <style>{`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `}</style>

        {currentStep === 0 && (
          <div>
            <span style={styles.prompt}>$</span>
            <span style={styles.command}>
              {steps[0].command}
            </span>
            <span style={styles.cursor} />
            <div style={styles.hint}>
              <strong>⏎ Click anywhere or press Enter to run this command</strong>
            </div>
          </div>
        )}

        {currentStep > 0 && (
          <div>
            <span style={styles.prompt}>$</span>
            <span style={styles.command}>
              {steps[currentStep - 1].command}
              {isTyping && <span style={styles.cursor} />}
            </span>

            {output.length > 1 && (
              <div style={styles.output}>
                {output.slice(1).map((line, i) => (
                  <div key={i}>{line || '\u00A0'}</div>
                ))}
              </div>
            )}
          </div>
        )}

        {currentStep > 0 && currentStep < steps.length && !isTyping && outputComplete && (
          <div>
            <span style={styles.prompt}>$</span>
            <span style={{ ...styles.command, opacity: 0.5 }}>
              {steps[currentStep].command}
            </span>
            <span style={styles.cursor} />
            <div style={{ ...styles.hint, marginTop: '0.5rem' }}>
              Press Enter to continue...
            </div>
          </div>
        )}

        {currentStep >= steps.length && outputComplete && (
          <div style={{ marginTop: '1rem', color: '#4ec9b0' }}>
            🎉 <strong>That's it!</strong> Your app is deployed with its own wallet.
          </div>
        )}
      </div>

      <div style={{ textAlign: 'center' }}>
        {currentStep >= steps.length ? (
          <>
            <button style={styles.button} onClick={reset}>
              ↻ Try Again
            </button>
            <button
              style={styles.buttonSecondary}
              onClick={() => window.open('/docs/products/eigencompute/quickstart', '_blank')}
            >
              Deploy Your Own →
            </button>
          </>
        ) : (
          <button
            style={styles.button}
            onClick={handleClick}
            disabled={isTyping || (currentStep > 0 && !outputComplete)}
          >
            {currentStep === 0 ? 'Run Command ⏎' : 'Next Step →'}
          </button>
        )}
      </div>
    </div>
  );
}
