import cn from '@/utils/cn';

export default function Container({ as: Tag = 'div', className, children, ...props }) {
  return (
    <Tag className={cn('mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20', className)} {...props}>
      {children}
    </Tag>
  );
}
