const Table = () => {
    const roles = [
        { id: 1, roleName: 'Admin', description: 'Full access to all features', description2: 'Full access to all features', description3: 'Full access to all features' },
        { id: 2, roleName: 'Editor', description: 'Can edit content', description2: 'Full access to all features', description3: 'Full access to all features', },
        { id: 3, roleName: 'Viewer', description: 'Can view content', description2: 'Full access to all features', description3: 'Full access to all features', },
        { id: 4, roleName: 'Contributor', description: 'Can add content', description2: 'Full access to all features', description3: 'Full access to all features', },
        { id: 5, roleName: 'Moderator', description: 'Can moderate user interactions', description2: 'Full access to all features', description3: 'Full access to all features', },
    ];

    return (
        <div className="overflow-x-auto ">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="text-left p-4 font-semibold text-gray-600">ID</th>
                        <th className="text-left p-4 font-semibold text-gray-600">Role Name</th>
                        <th className="text-left p-4 font-semibold text-gray-600">Description</th>
                        <th className="text-left p-4 font-semibold text-gray-600">Description2</th>
                        <th className="text-left p-4 font-semibold text-gray-600">Description3</th>
                    </tr>
                </thead>
                <tbody>
                    {roles.map((role) => (
                        <tr key={role.id} className="border-t">
                            <td className="p-4">{role.id}</td>
                            <td className="p-4">{role.roleName}</td>
                            <td className="p-4">{role.description}</td>
                            <td className="p-4">{role.description2}</td>
                            <td className="p-4">{role.description3}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;