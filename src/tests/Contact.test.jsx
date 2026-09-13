import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from '../components/sections/Contact';

describe('Contact Section - Senior Engineering & Logic Engine', () => {
  beforeEach(() => {
    sessionStorage.clear();
    vi.restoreAllMocks();
  });

  it('renders all contact coordinates, badges, and input fields', () => {
    render(<Contact isGodMode={false} themeMode="dark" />);

    // Verification badges
    expect(screen.getByText('07351187884')).toBeInTheDocument();
    expect(screen.getByText(/London, NW9 6EJ/i)).toBeInTheDocument();
    expect(screen.getByText(/Full Right to Work/i)).toBeInTheDocument();

    // Form fields
    expect(screen.getByLabelText(/Your Name \/ Recruiter ID/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contact Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Inquiry \/ Opportunity Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Transmit Message to Muhammad Mobeen/i)).toBeInTheDocument();
  });

  it('validates required fields and shows inline error messages when touched', async () => {
    render(<Contact isGodMode={false} themeMode="dark" />);

    const submitBtn = screen.getByText(/Transmit Message to Muhammad Mobeen/i);
    fireEvent.click(submitBtn);

    // Validation errors should appear
    await waitFor(() => {
      expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Email address is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Message details are required/i)).toBeInTheDocument();
    });
  });

  it('validates email format RFC check', async () => {
    render(<Contact isGodMode={false} themeMode="dark" />);

    const emailInput = screen.getByLabelText(/Contact Email Address/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email-format' } });
    fireEvent.blur(emailInput);

    await waitFor(() => {
      expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument();
    });

    // Valid email clears error
    fireEvent.change(emailInput, { target: { value: 'recruiter@techfirm.co.uk' } });
    await waitFor(() => {
      expect(screen.queryByText(/Please enter a valid email address/i)).not.toBeInTheDocument();
    });
  });

  it('updates live character counter as user types in message area', () => {
    render(<Contact isGodMode={false} themeMode="dark" />);

    const textarea = screen.getByLabelText(/Inquiry \/ Opportunity Details/i);
    expect(screen.getByText('0/2000')).toBeInTheDocument();

    fireEvent.change(textarea, { target: { value: 'Testing message length counter.' } });
    expect(screen.getByText('31/2000')).toBeInTheDocument();
  });

  it('allows selecting priority and domain chips', () => {
    render(<Contact isGodMode={false} themeMode="dark" />);

    // Select Urgent priority
    const urgentBtn = screen.getByText(/Immediate \/ Urgent/i);
    fireEvent.click(urgentBtn);

    // Select Hardware Diagnostics domain chip
    const hardwareChip = screen.getByText('Hardware Diagnostics & Soldering');
    fireEvent.click(hardwareChip);

    // Message field is pre-filled with context prompt
    const textarea = screen.getByLabelText(/Inquiry \/ Opportunity Details/i);
    expect(textarea.value).toContain('Hardware Diagnostics & Soldering');
  });

  it('displays resilient fallback channels when network or gateway fails', async () => {
    // Mock fetch to simulate network error / ad-blocker drop
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('Failed to fetch')));

    render(<Contact isGodMode={false} themeMode="dark" />);

    fireEvent.change(screen.getByLabelText(/Your Name \/ Recruiter ID/i), {
      target: { value: 'Lead Architect' }
    });
    fireEvent.change(screen.getByLabelText(/Contact Email Address/i), {
      target: { value: 'architect@enterprise.org' }
    });
    fireEvent.change(screen.getByLabelText(/Inquiry \/ Opportunity Details/i), {
      target: { value: 'We would like to interview you for a Senior IT & Hardware Specialist role.' }
    });

    const submitBtn = screen.getByText(/Transmit Message to Muhammad Mobeen/i);
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByRole('alert')).toBeInTheDocument();
      expect(screen.getByText(/Gateway Transmission Halted/i)).toBeInTheDocument();
      // Resilient fallbacks
      expect(screen.getByText(/Launch Native Mail Client/i)).toBeInTheDocument();
      expect(screen.getByText(/Copy Payload for Gmail \/ LinkedIn/i)).toBeInTheDocument();
      expect(screen.getByText(/Retry Gateway/i)).toBeInTheDocument();
    });
  });

  it('persists and restores draft from sessionStorage', () => {
    sessionStorage.setItem('mobeen_contact_draft_v1', JSON.stringify({
      name: 'Restored Recruiter',
      email: 'recruiter@enterprise.com',
      topic: 'Full-Stack Web Development',
      urgency: 'Immediate / Urgent (Hiring / Incident)',
      message: 'Draft message from earlier session.'
    }));

    render(<Contact isGodMode={false} themeMode="dark" />);

    expect(screen.getByDisplayValue('Restored Recruiter')).toBeInTheDocument();
    expect(screen.getByDisplayValue('recruiter@enterprise.com')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Draft message from earlier session.')).toBeInTheDocument();
    expect(screen.getByText(/Prior session draft automatically restored/i)).toBeInTheDocument();
  });

  it('supports raw packet inspection in Architect God Mode', () => {
    render(<Contact isGodMode={true} themeMode="dark" />);

    expect(screen.getByText('INITIATE_SYSTEM_TRANSMISSION')).toBeInTheDocument();
    const inspectBtn = screen.getByText(/\[ INSPECT_RAW_PACKET_BUFFER \]/i);
    expect(inspectBtn).toBeInTheDocument();

    fireEvent.click(inspectBtn);
    expect(screen.getByText(/\[ HIDE_BUFFER_PREVIEW \]/i)).toBeInTheDocument();
    expect(screen.getByText(/HTTPS\/TLS1\.3/i)).toBeInTheDocument();
  });
});
