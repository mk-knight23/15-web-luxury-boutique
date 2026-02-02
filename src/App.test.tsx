import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Mock framer-motion
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => {
            const { initial, animate, transition, whileInView, viewport, ...rest } = props;
            return <div {...rest}>{children}</div>;
        },
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe('Zenith Luxury E-Commerce', () => {
    it('renders without crashing', () => {
        const { container } = render(<App />);
        expect(container.firstChild).toBeInTheDocument();
    });

    it('renders navigation with correct links', () => {
        render(<App />);
        expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
        expect(screen.getByText(/Collections/i)).toBeInTheDocument();
        expect(screen.getAllByText(/Atelier/i)).toBeTruthy();
        expect(screen.getByText(/Tech Spec/i)).toBeInTheDocument();
    });

    it('renders hero section', () => {
        render(<App />);
        expect(screen.getAllByText(/REDEFINE/i)).toBeTruthy();
        expect(screen.getAllByText(/CRAFT/i)).toBeTruthy();
        expect(screen.getAllByText(/PERFORMANCE/i)).toBeTruthy();
    });

    it('renders products', () => {
        render(<App />);
        expect(screen.getByText(/AURA_NODE X1/i)).toBeInTheDocument();
        expect(screen.getByText(/CHRONOS_V3/i)).toBeInTheDocument();
        expect(screen.getByText(/ORBIT_CAM 4K/i)).toBeInTheDocument();
    });

    it('has proper ARIA labels for accessibility', () => {
        render(<App />);

        expect(screen.getByRole('application', { name: /Zenith Luxury E-Commerce/i })).toBeInTheDocument();
        expect(screen.getByRole('main')).toBeInTheDocument();
    });

    it('renders search button', () => {
        render(<App />);
        expect(screen.getByRole('button', { name: /Search products/i })).toBeInTheDocument();
    });

    it('renders explore button', () => {
        render(<App />);
        expect(screen.getByRole('button', { name: /Explore products/i })).toBeInTheDocument();
    });
});
