import React, { useState, useEffect, useRef } from 'react';

const DEFAULT_STYLES = {
  terminal: {
    backgroundColor: '#1e1e1e',
    color: '#d4d4d4',
    padding: '1.5rem',
    borderRadius: '8px',
    fontFamily: 'Monaco, Menlo, "Courier New", monospace',
    fontSize: '14px',
    height: '400px',
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

export default function InteractiveDemo({
  steps = [],
  completionMessage = "🎉 Demo complete!",
  ctaButton = null,
  styles: customStyles = {},
  promptSymbol = '$',
  typeSpeed = 100,
  initialDelay = 300
}) {
  const styles = { ...DEFAULT_STYLES, ...customStyles };
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [output, setOutput] = useState(['']);
  const [outputComplete, setOutputComplete] = useState(false);
  const terminalRef = useRef(null);

  const isFinished = currentStep >= steps.length;
  const canAdvance = !isTyping && (currentStep === 0 || outputComplete);

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  const typeCommand = (stepIndex) => {
    if (stepIndex >= steps.length) return;

    setIsTyping(true);
    setOutput([]);
    setOutputComplete(false);

    // Show output gradually
    setIsTyping(false);
    const stepOutput = steps[stepIndex].output;

    stepOutput.forEach((line, index) => {
      setTimeout(() => {
        setOutput(prev => [...prev, line]);

        // Mark complete and scroll after last line
        if (index === stepOutput.length - 1) {
          setOutputComplete(true);
          setTimeout(scrollToBottom, 100);
        }
      }, initialDelay + (index * typeSpeed));
    });
  };

  const advanceStep = () => {
    if (currentStep < steps.length && canAdvance) {
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

  const activeStep = currentStep > 0 ? steps[currentStep - 1] : null;
  const nextStep = currentStep < steps.length ? steps[currentStep] : null;

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
        {currentStep === 0 && steps.length > 0 && (
          <div>
            <span style={styles.prompt}>{promptSymbol}</span>
            <span style={styles.command}>
              {steps[0].command}
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
            <span style={styles.prompt}>{promptSymbol}</span>
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
            <span style={styles.prompt}>{promptSymbol}</span>
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
        {isFinished && outputComplete && completionMessage && (
          <div style={{ marginTop: '1rem', color: '#4ec9b0' }}>
            {completionMessage}
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
        {ctaButton && (
          <a
            href={ctaButton.href}
            style={{
              ...styles.buttonSecondary,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {ctaButton.text}
          </a>
        )}
      </div>
    </div>
  );
}
