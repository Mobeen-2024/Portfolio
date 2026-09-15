import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import AgentConsole from '../components/layout/AgentConsole';
import { processExecutiveQuery, executeCliCommand } from '../content/agent_knowledge';

describe('Agent Knowledge & Command Engine', () => {
  it('processes executive CompTIA query correctly', () => {
    const res = processExecutiveQuery('What is Mobeen\'s CompTIA qualification?');
    expect(res.title).toContain('CompTIA');
    expect(res.response).toContain('CompTIA A+');
  });

  it('processes hardware diagnostics query correctly', () => {
    const res = processExecutiveQuery('What hardware repair and soldering experience does he have?');
    expect(res.title).toContain('Hardware');
    expect(res.response).toContain('BMS');
  });

  it('processes cryptobot trading terminal query correctly', () => {
    const res = processExecutiveQuery('Tell me about the CryptoBot and trading engines');
    expect(res.title).toContain('CryptoBot');
    expect(res.response).toContain('Delta-Neutral');
  });

  it('processes executive timeline and education query correctly', () => {
    const res = processExecutiveQuery('What is your career timeline and education?');
    expect(res.title).toContain('Timeline');
    expect(res.response).toContain('The Educators');
    expect(res.response).toContain('Super Wings');
    expect(res.response).toContain('CompTIA A+');
  });

  it('handles empty executive query with validation fallback', () => {
    const res = processExecutiveQuery('   ');
    expect(res.title).toContain('Error');
  });

  it('executes CLI help command', () => {
    const res = executeCliCommand('help');
    expect(res.type).toBe('success');
    expect(res.lines.some(l => l.includes('status'))).toBe(true);
  });

  it('executes CLI cryptobot command', () => {
    const res = executeCliCommand('cryptobot');
    expect(res.type).toBe('success');
    expect(res.lines.some(l => l.includes('CRYPTOBOT 1.0'))).toBe(true);
    expect(res.lines.some(l => l.includes('Master-to-Slave'))).toBe(true);
  });

  it('executes CLI hardware command', () => {
    const res = executeCliCommand('hardware');
    expect(res.type).toBe('success');
    expect(res.lines.some(l => l.includes('Lithium-ion'))).toBe(true);
  });

  it('executes CLI timeline command', () => {
    const res = executeCliCommand('timeline');
    expect(res.type).toBe('success');
    expect(res.lines.some(l => l.includes('CONSOLIDATED MASTER TIMELINE'))).toBe(true);
    expect(res.lines.some(l => l.includes('Super Wings'))).toBe(true);
    expect(res.lines.some(l => l.includes('IT Infrastructure & Hardware Technician'))).toBe(true);
  });

  it('returns error for unknown CLI command', () => {
    const res = executeCliCommand('unknown_subroutine');
    expect(res.type).toBe('error');
    expect(res.lines[0]).toContain('command not found');
  });

  it('clears buffer on clear command', () => {
    const res = executeCliCommand('clear');
    expect(res.type).toBe('clear');
  });
});

describe('AgentConsole Component', () => {
  it('renders minimized HUD pill when closed', () => {
    render(<AgentConsole isGodMode={false} isOpen={false} setIsOpen={() => {}} />);
    expect(screen.getByRole('button', { name: /open agent console/i })).toBeInTheDocument();
  });

  it('renders executive co-pilot interface when open in executive mode', () => {
    render(<AgentConsole isGodMode={false} isOpen={true} setIsOpen={() => {}} />);
    expect(screen.getByText(/IT Systems & Support Advisor/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/ask about comptia a\+/i)).toBeInTheDocument();
  });

  it('executes a quick command chip when clicked in architect mode', () => {
    render(<AgentConsole isGodMode={true} isOpen={true} setIsOpen={() => {}} />);
    const statusChip = screen.getByRole('button', { name: '$status' });
    fireEvent.click(statusChip);
    expect(screen.getByText(/HARDWARE & SYSTEMS RUNTIME TELEMETRY/i)).toBeInTheDocument();
  });

  it('navigates CLI command history using ArrowUp and ArrowDown', () => {
    render(<AgentConsole isGodMode={true} isOpen={true} setIsOpen={() => {}} />);
    const input = screen.getByPlaceholderText(/type command/i);

    // Enter first command
    fireEvent.change(input, { target: { value: 'status' } });
    fireEvent.submit(input.closest('form'));

    // Enter second command
    fireEvent.change(input, { target: { value: 'projects' } });
    fireEvent.submit(input.closest('form'));

    // Press ArrowUp -> should recall 'projects'
    fireEvent.keyDown(input, { key: 'ArrowUp' });
    expect(input.value).toBe('projects');

    // Press ArrowUp again -> should recall 'status'
    fireEvent.keyDown(input, { key: 'ArrowUp' });
    expect(input.value).toBe('status');

    // Press ArrowDown -> should go forward to 'projects'
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    expect(input.value).toBe('projects');
  });

  it('closes console on Escape key', () => {
    let openState = true;
    const setIsOpen = (val) => { openState = val; };
    render(<AgentConsole isGodMode={false} isOpen={true} setIsOpen={setIsOpen} />);
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(openState).toBe(false);
  });
});
