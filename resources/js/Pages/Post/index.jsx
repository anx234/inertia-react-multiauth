import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link, useForm, usePage } from "@inertiajs/inertia-react";
import Input from "@/Components/Input";
import Button from "@/Components/Button";

export default function Index(props) {
    const { delete: destory } = useForm();
    const handleDelete = (id) => {
        destory(route("post.destroy", id), {
            preserveScroll: true,
        });
    };
    const { flash } = usePage().props;

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    post
                </h2>
                
            }
        >
            <Head title="post Index" />

            <div className="p-6 bg-white border-b border-gray-200">
                {flash.message && <div class="alert">{flash.message}</div>}
            </div>

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">

                    <div className="mt-4">
                        <Link href={route("post.create")}>
                            <Button type="button">新規作成</Button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="p-6 bg-white border-b border-gray-200">
                <table className="mx-auto">
                    <thead>
                        <tr>
                            <th>タイトル</th>
                            <th>コンテンツ</th>
                            <th>更新</th>
                            <th>削除</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.posts.map((post) => {
                            return (
                                <tr key={post.id}>
                                    <td className="border px-4 py-2">
                                        <Link
                                            href={route("post.show", post.id)}
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {post.title}
                                        </Link>
                                    </td>
                                    <td className="border px-4 py-2">
                                        {post.content}
                                    </td>
                                    <td className="border px-4 py-2">
                                        <Link
                                            href={route("post.edit", post.id)}
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-xs font-semibold">
                                                更新
                                            </button>
                                        </Link>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <button
                                            className="px-4 py-2 bg-red-500 text-white rounded-lg text-xs font-semibold"
                                            onClick={() =>
                                                handleDelete(post.id)
                                            }
                                        >
                                            削除
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </Authenticated>
    );
}
