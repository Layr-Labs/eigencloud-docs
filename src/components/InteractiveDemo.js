import React, { useState, useEffect, useRef } from 'react';

const DEMO_STEPS = [
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
    fontSize: '14px',
    lineHeight: 'normal',
    boxSizing: 'border-box',
    verticalAlign: 'middle'
  },
  buttonSecondary: {
    backgroundColor: 'transparent',
    color: '#0066cc',
    border: '1px solid #0066cc',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    lineHeight: 'normal',
    boxSizing: 'border-box'
  }
};

export default function InteractiveDemo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [output, setOutput] = useState(['']);
  const [outputComplete, setOutputComplete] = useState(false);
  const terminalRef = useRef(null);

  const isFinished = currentStep >= DEMO_STEPS.length;
  const canAdvance = !isTyping && (currentStep === 0 || outputComplete);

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  const typeCommand = (stepIndex) => {
    if (stepIndex >= DEMO_STEPS.length) return;

    setIsTyping(true);
    setOutput([]);
    setOutputComplete(false);

    // Show output gradually
    setIsTyping(false);
    const stepOutput = DEMO_STEPS[stepIndex].output;
    
    stepOutput.forEach((line, index) => {
      setTimeout(() => {
        setOutput(prev => [...prev, line]);
        
        // Mark complete and scroll after last line
        if (index === stepOutput.length - 1) {
          setOutputComplete(true);
          setTimeout(scrollToBottom, 100);
        }
      }, 300 + (index * 100));
    });
  };

  const advanceStep = () => {
    if (currentStep < DEMO_STEPS.length && canAdvance) {
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

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        advanceStep();
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [currentStep, canAdvance]);

  const activeStep = currentStep > 0 ? DEMO_STEPS[currentStep - 1] : null;
  const nextStep = currentStep < DEMO_STEPS.length ? DEMO_STEPS[currentStep] : null;

  return (
    <div>
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>

      <div
        ref={terminalRef}
        style={styles.terminal}
        onClick={advanceStep}
        role="button"
        tabIndex={0}
      >
        {/* Initial state - show first command */}
        {currentStep === 0 && (
          <div>
            <span style={styles.prompt}>$</span>
            <span style={styles.command}>
              {DEMO_STEPS[0].command}
            </span>
            <span style={styles.cursor} />
            <div style={styles.hint}>
              <strong>⏎ Click anywhere or press Enter to run this command</strong>
            </div>
          </div>
        )}

        {/* Active command with output */}
        {activeStep && (
          <div>
            <span style={styles.prompt}>$</span>
            <span style={styles.command}>
              {activeStep.command}
              {isTyping && <span style={styles.cursor} />}
            </span>

            {output.length > 0 && (
              <div style={styles.output}>
                {output.map((line, i) => (
                  <div key={i}>{line || '\u00A0'}</div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Next command preview */}
        {nextStep && !isTyping && outputComplete && (
          <div style={{ marginTop: '1rem' }}>
            <span style={styles.prompt}>$</span>
            <span style={{ ...styles.command, opacity: 0.5 }}>
              {nextStep.command}
            </span>
            <span style={styles.cursor} />
            <div style={{ ...styles.hint, marginTop: '0.5rem' }}>
              Press Enter to continue...
            </div>
          </div>
        )}

        {/* Completion message */}
        {isFinished && outputComplete && (
          <div style={{ marginTop: '1rem', color: '#4ec9b0' }}>
            🎉 <strong>That's it!</strong> Your app is deployed with its own wallet.
          </div>
        )}
      </div>

      <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
        {isFinished ? (
          <button style={styles.button} onClick={reset}>
            ↻ Try Again
          </button>
        ) : (
          <button
            style={styles.button}
            onClick={advanceStep}
            disabled={!canAdvance}
          >
            {currentStep === 0 ? 'Run Command ⏎' : 'Next Step →'}
          </button>
        )}
        <a
          href="/products/eigencompute/quickstart"
          style={{ 
            ...styles.buttonSecondary, 
            textDecoration: 'none', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Deploy Your Own →
        </a>
      </div>
    </div>
  );
}
