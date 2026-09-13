import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Dual-Reality Portfolio App', () => {
  it('renders the initial executive layout with branding and CTAs', () => {
    render(<App />);
    
    // Check navigation branding
    expect(screen.getByText('MOBEEN')).toBeInTheDocument();
    
    // Check executive CTAs
    expect(screen.getByText('Explore Strategic Outcomes')).toBeInTheDocument();
    expect(screen.getByText('Consult Executive AI')).toBeInTheDocument();
    
    // Check projects heading
    expect(screen.getByText('Featured Strategic Success')).toBeInTheDocument();
  });

  it('renders all 5 portfolio projects', () => {
    render(<App />);
    expect(screen.getByText('Revenue Growth Architecture')).toBeInTheDocument();
    expect(screen.getByText('Strategic Attribution & Retention')).toBeInTheDocument();
    expect(screen.getByText('Autonomous Workflow Intelligence')).toBeInTheDocument();
    expect(screen.getByText('Real-Time Data Modernization')).toBeInTheDocument();
    expect(screen.getByText('Enterprise Core Infrastructure')).toBeInTheDocument();
  });

  it('opens ProjectDetailModal when clicking a project card', () => {
    render(<App />);
    const firstProject = screen.getByText('Revenue Growth Architecture');
    fireEvent.click(firstProject);

    // Modal should now be visible
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Strategic Takeaway & ROI')).toBeInTheDocument();
  });

  it('opens the Agent Console when clicking the Hero CTA', () => {
    render(<App />);
    const agentCta = screen.getByText('Consult Executive AI');
    fireEvent.click(agentCta);

    // Agent console should now be expanded
    expect(screen.getByPlaceholderText(/ask a strategic question/i)).toBeInTheDocument();
  });
});
