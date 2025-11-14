import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';

const formSchema = z.object({
  maxhdd: z.number(),
  maxssd: z.number(),
  maxnvme: z.number(),
  maxDisks: z.number(),
  maxDedicatedNvme: z.number(),
});

export const ChassisConfigForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="maxhdd"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Max HDD</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="maxssd"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Max SSD</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="maxnvme"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Max NVME</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="maxDisks"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Max Disks</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="maxDedicatedNvme"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Max Dedicated Nvme Slots</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Next
        </Button>
      </form>
    </Form>
  );
};
