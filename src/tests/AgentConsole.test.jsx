import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import AgentConsole from '../components/layout/AgentConsole';
import { processExecutiveQuery, executeCliCommand } from '../content/agent_knowledge';

describe('Agent Knowledge & Command Engine', () => {
  it('processes executive ROI query correctly', () => {
    const res = processExecutiveQuery('What is the revenue ROI?');
    expect(res.title).toContain('ROI');
    expect(res.response).toContain('$2.4M');
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

  it('executes CLI eval_metrics command adhering to skill evaluation standards', () => {
    const res = executeCliCommand('eval_metrics');
    expect(res.type).toBe('success');
    expect(res.lines.some(l => l.includes('CONSTITUTIONAL CRITERIA MET'))).toBe(true);
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
    expect(screen.getByText(/Strategic Executive Advisor/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/ask a strategic question/i)).toBeInTheDocument();
  });

  it('executes a quick command chip when clicked in architect mode', () => {
    render(<AgentConsole isGodMode={true} isOpen={true} setIsOpen={() => {}} />);
    const statusChip = screen.getByRole('button', { name: '$status' });
    fireEvent.click(statusChip);
    expect(screen.getByText(/RUNTIME TELEMETRY/i)).toBeInTheDocument();
  });
});
