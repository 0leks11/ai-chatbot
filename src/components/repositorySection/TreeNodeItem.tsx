//src/components/RepositorySection/TreeNodeItem.tsx
import React from 'react';
import { TreeNode } from '../../types/githubTypes';
import { FileIcon, FileDirectoryIcon, ChevronDownIcon, ChevronRightIcon } from '@primer/octicons-react';

interface TreeNodeItemProps {
  node: TreeNode;
  onSelectFile: (path: string) => void;
}

const TreeNodeItem: React.FC<TreeNodeItemProps> = ({ node, onSelectFile }) => {
  const [isExpanded, setIsExpanded] = React.useState(true);

  const hasChildren = node.children && node.children.length > 0;

  const handleToggle = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    } else {
      onSelectFile(node.path);
    }
  };

  return (
    <li>
      <div
        className="flex items-center cursor-pointer py-1"
        onClick={handleToggle}
      >
        <span className="mr-1">
          {hasChildren ? (
            isExpanded ? <ChevronDownIcon size={16} /> : <ChevronRightIcon size={16} />
          ) : (
            <span style={{ width: '16px', display: 'inline-block' }}></span>
          )}
        </span>
        <span className="mr-1">
          {hasChildren ? <FileDirectoryIcon size={16} /> : <FileIcon size={16} />}
        </span>
        <span className="text-sm">{node.name}</span>
      </div>
      {hasChildren && isExpanded && (
        <ul className="ml-4 list-none">
          {node.children!.map((child) => (
            <TreeNodeItem key={child.path} node={child} onSelectFile={onSelectFile} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default TreeNodeItem;