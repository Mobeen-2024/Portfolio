import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Dual-Reality Portfolio App', () => {
  it('renders the initial executive layout with branding and CTAs', () => {
    render(<App />);
    
    // Check navigation branding
    expect(screen.getByText('MOBEEN')).toBeInTheDocument();
    
    // Check executive CTAs
    expect(screen.getByText('Explore Technical Projects')).toBeInTheDocument();
    expect(screen.getByText('Consult Systems AI')).toBeInTheDocument();
    
    // Check projects heading
    expect(screen.getByText('Featured Strategic Success')).toBeInTheDocument();
  });

  it('renders portfolio projects including RepX AI', () => {
    render(<App />);
    expect(screen.getByText('Hisaab-Kitaab Finance App')).toBeInTheDocument();
    expect(screen.getAllByText(/RepX AI/i).length).toBeGreaterThan(0);
    expect(screen.getByText('Advanced Hardware Diagnostics & Repair')).toBeInTheDocument();
    expect(screen.getByText('IoT Home Automation Framework')).toBeInTheDocument();
    expect(screen.getByText('CryptoBot / TradeX Terminal')).toBeInTheDocument();
    expect(screen.getByText('CCTV Network & Infrastructure')).toBeInTheDocument();
  });

  it('opens ProjectDetailModal when clicking a project card', () => {
    render(<App />);
    const firstProject = screen.getByText('Hisaab-Kitaab Finance App');
    fireEvent.click(firstProject);

    // Modal should now be visible
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Strategic Takeaway & ROI')).toBeInTheDocument();
  });

  it('renders the Skills Matrix and Career Timeline sections', () => {
    render(<App />);
    expect(screen.getByText(/Core Technical Capabilities/i)).toBeInTheDocument();
    expect(screen.getByText(/Practical Experience & Qualifications/i)).toBeInTheDocument();
  });

  it('filters projects using the search input', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/filter by tool or skill/i);
    fireEvent.change(searchInput, { target: { value: 'Fastify' } });
    
    // Should show CryptoBot / TradeX Terminal
    expect(screen.getByText('CryptoBot / TradeX Terminal')).toBeInTheDocument();
  });
});
