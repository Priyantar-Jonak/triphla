export default function Dashboard() {
    return (
        <div data-theme="coffee" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard! Here you can manage your data and view insights.</p>
            <div style={{ marginTop: '20px' }}>
                <button style={{ padding: '10px 20px', marginRight: '10px' }}>View Reports</button>
                <button style={{ padding: '10px 20px' }}>Manage Settings</button>
            </div>
        </div>
    );
}